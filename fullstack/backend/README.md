
# BE

This is a tiny project that fronts a domain specific API for elastic search.

# Local dev setup - python 3.8+

0. Python

You'll need python 3.8+. Lets call it 3.8.5, but really anything modern will do.

Soo.. you know. On a mac, go

```bash
brew install python@3.8
```

.. on ubuntu: 

```bash
apt install python3.8
```


1. Setup your virtual environment

As to not polute your global env. If python 3.8 is default on your system, use `python` here instead. Otherwise, it probably installed it as `python3` or `python3.8`. 

```sh
python3 -m pip install --user virtualenv # if you don't already have it installed
python3 -m virtualenv .
```

2. Activate the virtual environment:

You'll have to do this every time you open a new terminal window/tab. Unless you wanna mess with `direnv` and the like, but hey - who has time amirite?

```sh
source bin/activate
```

3. Check if it's activated properly, by checking the path of the used python interpreter:

```sh
which python
python -V
```

You should see your current path prepended to `/bin/python` and the version of python you're using. If it's 3.8, good.


4. Install deps

```sh
pip install -r requirements.txt
```

# Testing it

```sh
python -m unittest
```


# Running it:

```sh
FLASK_APP=be/app.py flask run --host=0.0.0.0
```

```
curl localhost:5000
curl localhost:5000/search/test
```
