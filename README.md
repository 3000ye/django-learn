# Acwing Django学习
## 第一次课程：创建环境

创建项目：

```shell
django-admin startproject <project name>
```

启动项目：这里使用`8000`端口来调试

```shell
python3 manage.py runserver 0.0.0.0:8000 
```

更新`migration`：

```shell
python3 manage.py migrate
```

如果第一次运行出现报错，则需要在`settings.py`文件中的`ALLOWED_HOSTS`中添加服务器ip：

```python
ALLOWED_HOSTS = [
    "ip",
]
```

创建`app`:

```shell
python3 manage.py startapp <app name>
```

创建管理员帐号：

```shell
python3 manage.py createsuperuser
```

然后在网站后面加`/admin`即可登陆管理员帐号。

