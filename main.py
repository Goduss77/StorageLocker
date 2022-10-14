from flask import *


app = Flask('__main__')


@app.route('/')
def view_warehouse():
    return render_template("warehouse.html")


if __name__ == '__main__':
    app.run()
