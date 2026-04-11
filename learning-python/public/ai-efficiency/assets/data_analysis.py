import pandas as pd
import json
import numpy as np
from datetime import datetime

def load_data(file_path):
    """加载Excel数据"""
    df = pd.read_excel(file_path)
    return df

def analyze_data(df):
    """执行数据分析"""
    analysis_results = {}

    print("=== 数据分析开始 ===")

    # 1. 各产品销售额和利润分析
    print("\n1. 各产品销售额和利润分析")
    product_sales = df.groupby('Product').agg({
        'Units Sold': 'sum',
        ' Sales': 'sum',
        'Profit': 'sum',
        'COGS': 'sum'
    }).reset_index()

    # 计算产品利润率
    product_sales['Profit Margin'] = product_sales['Profit'] / product_sales[' Sales'] * 100
    product_sales['Avg Sale Price'] = product_sales[' Sales'] / product_sales['Units Sold']

    print(product_sales.round(2).to_string())
    analysis_results['product_analysis'] = product_sales.to_dict('records')

    # 2. 各地区销售额分析
    print("\n2. 各地区销售额分析")
    country_sales = df.groupby('Country').agg({
        ' Sales': 'sum',
        'Profit': 'sum',
        'Units Sold': 'sum'
    }).reset_index()

    country_sales['Profit Margin'] = country_sales['Profit'] / country_sales[' Sales'] * 100
    country_sales = country_sales.sort_values(' Sales', ascending=False)

    print(country_sales.round(2).to_string())
    analysis_results['country_analysis'] = country_sales.to_dict('records')

    # 3. 各细分市场销售额分析
    print("\n3. 各细分市场销售额分析")
    segment_sales = df.groupby('Segment').agg({
        ' Sales': 'sum',
        'Profit': 'sum',
        'Units Sold': 'sum'
    }).reset_index()

    segment_sales['Profit Margin'] = segment_sales['Profit'] / segment_sales[' Sales'] * 100
    segment_sales = segment_sales.sort_values(' Sales', ascending=False)

    print(segment_sales.round(2).to_string())
    analysis_results['segment_analysis'] = segment_sales.to_dict('records')

    # 4. 月度销售趋势分析
    print("\n4. 月度销售趋势分析")
    monthly_sales = df.groupby(['Year', 'Month Number', 'Month Name']).agg({
        ' Sales': 'sum',
        'Profit': 'sum',
        'Units Sold': 'sum'
    }).reset_index()

    # 按年月排序
    monthly_sales = monthly_sales.sort_values(['Year', 'Month Number'])
    monthly_sales['Month_Label'] = monthly_sales['Month Name'] + ' ' + monthly_sales['Year'].astype(str)

    print(monthly_sales[['Month_Label', ' Sales', 'Profit', 'Units Sold']].round(2).to_string())
    analysis_results['monthly_analysis'] = monthly_sales.to_dict('records')

    # 5. 折扣效果分析
    print("\n5. 折扣效果分析")
    discount_analysis = df.groupby('Discount Band').agg({
        ' Sales': 'sum',
        'Profit': 'sum',
        'Units Sold': 'sum',
        'Discounts': 'sum'
    }).reset_index()

    # 填充NaN为'No Discount'
    discount_analysis['Discount Band'] = discount_analysis['Discount Band'].fillna('No Discount')
    discount_analysis['Avg Discount Rate'] = discount_analysis['Discounts'] / discount_analysis[' Sales'] * 100
    discount_analysis['Profit Margin'] = discount_analysis['Profit'] / discount_analysis[' Sales'] * 100

    print(discount_analysis.round(2).to_string())
    analysis_results['discount_analysis'] = discount_analysis.to_dict('records')

    # 6. 销售数量与价格关系分析
    print("\n6. 销售数量与价格关系分析")
    price_analysis = df.groupby('Sale Price').agg({
        'Units Sold': 'sum',
        ' Sales': 'sum',
        'Profit': 'sum'
    }).reset_index()

    price_analysis['Avg Units per Price'] = price_analysis['Units Sold'] / len(df[df['Sale Price'].isin(price_analysis['Sale Price'])])
    price_analysis = price_analysis.sort_values('Sale Price')

    print(price_analysis.round(2).to_string())
    analysis_results['price_analysis'] = price_analysis.to_dict('records')

    # 7. 关键统计摘要
    print("\n7. 关键统计摘要")
    summary_stats = {
        'total_sales': df[' Sales'].sum(),
        'total_profit': df['Profit'].sum(),
        'total_units': df['Units Sold'].sum(),
        'avg_profit_margin': (df['Profit'].sum() / df[' Sales'].sum() * 100),
        'avg_discount_rate': (df['Discounts'].sum() / df[' Sales'].sum() * 100),
        'total_countries': df['Country'].nunique(),
        'total_products': df['Product'].nunique(),
        'total_segments': df['Segment'].nunique(),
        'date_range': f"{df['Date'].min().strftime('%Y-%m')} to {df['Date'].max().strftime('%Y-%m')}"
    }

    for key, value in summary_stats.items():
        print(f"{key}: {value:.2f}" if isinstance(value, (int, float)) else f"{key}: {value}")

    analysis_results['summary_stats'] = summary_stats

    # 8. 产品-地区组合分析
    print("\n8. 热门产品-地区组合分析")
    product_country = df.groupby(['Product', 'Country']).agg({
        ' Sales': 'sum',
        'Profit': 'sum'
    }).reset_index()

    # 找出每个产品在每个国家的销售额排名
    product_country['Rank'] = product_country.groupby('Product')[' Sales'].rank(ascending=False)
    top_product_country = product_country[product_country['Rank'] <= 3].sort_values(['Product', 'Rank'])

    print(top_product_country.round(2).to_string())
    analysis_results['product_country_analysis'] = top_product_country.to_dict('records')

    return analysis_results

def save_chart_data(analysis_results, output_file='chart_data.json'):
    """保存图表数据为JSON格式，用于Chart.js"""
    chart_data = {}

    # 产品分析图表数据
    product_data = analysis_results['product_analysis']
    chart_data['product_sales'] = {
        'labels': [item['Product'] for item in product_data],
        'sales': [float(item[' Sales']) for item in product_data],
        'profits': [float(item['Profit']) for item in product_data],
        'profit_margins': [float(item['Profit Margin']) for item in product_data]
    }

    # 地区分析图表数据
    country_data = analysis_results['country_analysis']
    chart_data['country_sales'] = {
        'labels': [item['Country'] for item in country_data],
        'sales': [float(item[' Sales']) for item in country_data],
        'profit_margins': [float(item['Profit Margin']) for item in country_data]
    }

    # 细分市场分析图表数据
    segment_data = analysis_results['segment_analysis']
    chart_data['segment_sales'] = {
        'labels': [item['Segment'] for item in segment_data],
        'sales': [float(item[' Sales']) for item in segment_data],
        'profits': [float(item['Profit']) for item in segment_data]
    }

    # 月度趋势图表数据
    monthly_data = analysis_results['monthly_analysis']
    chart_data['monthly_trend'] = {
        'labels': [item['Month_Label'] for item in monthly_data],
        'sales': [float(item[' Sales']) for item in monthly_data],
        'profits': [float(item['Profit']) for item in monthly_data]
    }

    # 折扣分析图表数据
    discount_data = analysis_results['discount_analysis']
    chart_data['discount_analysis'] = {
        'labels': [item['Discount Band'] for item in discount_data],
        'sales': [float(item[' Sales']) for item in discount_data],
        'profit_margins': [float(item['Profit Margin']) for item in discount_data],
        'avg_discount_rates': [float(item['Avg Discount Rate']) for item in discount_data]
    }

    # 价格分析图表数据
    price_data = analysis_results['price_analysis']
    chart_data['price_analysis'] = {
        'labels': [f"${item['Sale Price']}" for item in price_data],
        'units_sold': [float(item['Units Sold']) for item in price_data],
        'sales': [float(item[' Sales']) for item in price_data]
    }

    # 保存为JSON文件
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(chart_data, f, indent=2, ensure_ascii=False)

    print(f"\n图表数据已保存到: {output_file}")
    return chart_data

def main():
    file_path = "Financial Sample.xlsx"

    print("加载数据...")
    df = load_data(file_path)

    print("执行数据分析...")
    analysis_results = analyze_data(df)

    print("\n保存图表数据...")
    chart_data = save_chart_data(analysis_results, 'chart_data.json')

    # 保存详细分析结果
    with open('analysis_results.json', 'w', encoding='utf-8') as f:
        json.dump(analysis_results, f, indent=2, ensure_ascii=False)

    print("数据分析完成！结果已保存到 analysis_results.json 和 chart_data.json")

if __name__ == "__main__":
    main()