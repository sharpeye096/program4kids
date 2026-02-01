def say_hi(name, age):  #5
    if age < 6:
        msg = "Hi," + name + "你还是个小小朋友吧！"
    else:
        if age <= 12:
            msg = "Hi," + name + "你还在上小学吧！"
        else:
            msg = "Hi," + name + "你已经是个大孩子啦！"

    return msg

print(say_hi("奚乐知", 1))
print(say_hi("奚行简", 8))
print(say_hi("奚旺", 18))