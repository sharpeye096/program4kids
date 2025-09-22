# -*- coding: utf-8 -*-
# 第二章示例代码

# 2.1 变量：数据的容器

# 给数字起名字
age = 10
score = 98.5

# 给文字起名字  
name = "小明"
school = "阳光小学"

# 给真假值起名字
is_student = True
likes_programming = False

# 使用变量
name = "小红"
age = 9
print(name + "今年" + str(age) + "岁了")
# 输出：小红今年9岁了

print("\n=== 2.2 数据类型：数字、文字、真假值 ===")

# 数字类型
# 整数 - 没有小数点的数字
age = 10          # int类型
class_size = 45      # int类型

# 浮点数 - 有小数点的数字  
height = 1.45        # float类型
weight = 35.5        # float类型
temperature = 36.8        # float类型

# 文字类型（字符串）
# 用单引号或双引号包围
name = '小明'       # str类型
school = "希望小学"    # str类型
motto = '好好学习，天天向上'  # str类型

# 特殊字符
newline = "第一行\n第二行"  # \n表示换行
tab = "姓名\t年龄"    # \t表示制表符（Tab）

# 真假值类型（布尔值）
is_sunny = True      # bool类型，表示真
is_raining = False     # bool类型，表示假

# 比较运算得到布尔值
result1 = 10 > 5     # True，10大于5
result2 = 3 == 4     # False，3不等于4

# 查看数据类型：
print("数据类型检查：")
print(type(10))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>
print(type(True))      # <class 'bool'>

print("\n=== 2.3 基本运算：加减乘除 ===")

# 算术运算
# 加法
sum = 5 + 3        # 8
print(f"5 + 3 = {sum}")

# 减法  
difference = 10 - 4       # 6
print(f"10 - 4 = {difference}")

# 乘法
product = 6 * 7        # 42
print(f"6 * 7 = {product}")

# 除法
quotient = 15 / 3       # 5.0（注意结果是浮点数）
print(f"15 / 3 = {quotient}")

# 整除（去掉小数部分）
floor_division = 17 // 5   # 3
print(f"17 // 5 = {floor_division}")

# 取余（求余数）
remainder = 17 % 5      # 2
print(f"17 % 5 = {remainder}")

# 幂运算
square = 5 ** 2      # 25
print(f"5 ** 2 = {square}")
cube = 2 ** 3      # 8
print(f"2 ** 3 = {cube}")

# 字符串运算
# 字符串拼接
greeting = "你好" + "！"          # "你好！"
print(f"字符串拼接: {greeting}")

full_name = "张" + "小明"          # "张小明"
print(f"全名: {full_name}")

# 字符串重复
stars = "*" * 5              # "*****"
print(f"星星: {stars}")

separator = "-" * 20            # "--------------------"
print(f"分隔线: {separator}")

# 注意：数字和字符串不能直接相加
# print("年龄：" + 10)       # ❌ 错误！
print("年龄：" + str(10))    # ✅ 正确！

print("\n=== 2.4 输入和输出：与程序对话 ===")

# 输出：print()函数
# 基本输出
print("Hello World!")

# 输出多个值
print("姓名：", "小明", "年龄：", 10)

# 格式化输出
name = "小红"
age = 9
print(f"{name}今年{age}岁了")  # 小红今年9岁了

# 输出到一行（不换行）
print("正在加载", end="")
print("...", end="")
print("完成！")
# 输出：正在加载...完成！

# 输入：input()函数
# 注意：在实际运行时会等待用户输入，这里我们注释掉以避免阻塞
'''
# 获取用户输入
name = input("请输入你的名字：")
age = input("请输入你的年龄：")

print(f"你好{name}，你{age}岁了！")

# 注意：input()返回的是字符串
# 如果需要数字，要转换类型
age_number = int(input("请输入年龄："))
next_year_age = age_number + 1
print(f"明年你就{next_year_age}岁了")
'''

# 类型转换
# 字符串转数字
number1 = int("10")      # 10（整数）
number2 = float("3.14")  # 3.14（浮点数）
print(f"字符串转数字: {number1}, {number2}")

# 数字转字符串
text1 = str(10)        # "10"
text2 = str(3.14)      # "3.14"
print(f"数字转字符串: '{text1}', '{text2}'")

# 布尔值转换
result1 = bool(1)        # True
result2 = bool(0)        # False
result3 = bool("hello")  # True
result4 = bool("")       # False
print(f"布尔值转换: {result1}, {result2}, {result3}, {result4}")

print("\n=== 2.5 小练习 ===")

# 练习1：个人信息收集
# 注意：在实际运行时会等待用户输入，这里我们注释掉以避免阻塞
'''
# 收集用户信息并显示
name = input("你叫什么名字？")
age = int(input("你几岁了？"))
school = input("你在哪个学校上学？")

print("\n=== 个人信息 ===")
print(f"姓名：{name}")
print(f"年龄：{age}")
print(f"学校：{school}")
print("=" * 20)
'''

# 练习2：数学小助手
# 注意：在实际运行时会等待用户输入，这里我们注释掉以避免阻塞
'''
# 帮助计算数学题
number1 = float(input("请输入第一个数字："))
number2 = float(input("请输入第二个数字："))

print(f"\n计算结果：")
print(f"{number1} + {number2} = {number1 + number2}")
print(f"{number1} - {number2} = {number1 - number2}")
print(f"{number1} × {number2} = {number1 * number2}")
print(f"{number1} ÷ {number2} = {number1 / number2}")
'''

# 练习3：创意作品
# 注意：在实际运行时会等待用户输入，这里我们注释掉以避免阻塞
'''
# 用变量和输出创造有趣的内容
animal = input("你最喜欢的动物是什么？")
color = input("你最喜欢的颜色是什么？")
number = int(input("你最喜欢的数字是什么？"))

print("\n✨ 你的创意作品：")
print(animal * number)
print(f"这是一只{color}的{animal}！")
print("✨" * (number + 2))
'''

print("\n=== 第二章示例代码运行完成 ===")