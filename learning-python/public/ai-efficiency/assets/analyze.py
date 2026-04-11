import pandas as pd
import json
import sys

def analyze_excel(file_path):
    print(f"Reading Excel file: {file_path}")

    try:
        # Get sheet names
        xl = pd.ExcelFile(file_path)
        print(f"Sheet names: {xl.sheet_names}")

        # Read first sheet
        df = xl.parse(0)
        print(f"Data shape: {df.shape}")
        print(f"Columns: {list(df.columns)}")

        print("\n=== Data Preview ===")
        print(df.head())

        print("\n=== Data Types ===")
        print(df.dtypes)

        print("\n=== Missing Values ===")
        print(df.isnull().sum())

        print("\n=== Numeric Columns Summary ===")
        numeric_cols = df.select_dtypes(include=['number']).columns
        if len(numeric_cols) > 0:
            print(df[numeric_cols].describe())
        else:
            print("No numeric columns found")

        print("\n=== Unique Values in Categorical Columns ===")
        categorical_cols = df.select_dtypes(include=['object']).columns
        for col in categorical_cols:
            unique_count = df[col].nunique()
            print(f"{col}: {unique_count} unique values")
            if unique_count <= 10:
                print(f"  Values: {df[col].unique().tolist()}")

        # Save basic info for later use
        data_info = {
            "file": file_path,
            "shape": df.shape,
            "columns": list(df.columns),
            "numeric_columns": list(numeric_cols),
            "categorical_columns": list(categorical_cols)
        }

        with open('data_info.json', 'w', encoding='utf-8') as f:
            json.dump(data_info, f, indent=2, ensure_ascii=False)

        print("\n=== Data info saved to data_info.json ===")

        return df

    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return None

if __name__ == "__main__":
    file_path = "Financial Sample.xlsx"
    df = analyze_excel(file_path)

    if df is not None:
        print("\n=== First 5 rows of data ===")
        print(df.head().to_string())