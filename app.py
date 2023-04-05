from flask import Flask, jsonify,request
import mysql.connector
app=Flask(__name__)

@app.route('/hello',methods=['GET'])
def hello():
    return("Working")


@app.route('/h',methods=['POST'])
def h():
    json=request.json
    return(json)

@app.route('/data',methods=['GET'])
def data():
    db=mysql.connector.connect(host="localhost", user="root", database="bava")
    cur=db.cursor()
    cur.execute("Select * from form")
    a=cur.fetchall()
    print(a)
    return(a)

@app.route('/send',methods=['POST'])
def send():
    db=mysql.connector.connect(host="localhost", user="root", database="bava")
    cur=db.cursor()
    json=request.json
    fname=json["fname"]
    lname=json["lname"]
    mail=json["mail"]
    pno=json["pno"]
    dob=json["dob"]
    gen=json["gen"]
    add1=json["address1"]
    add2=json["address2"]
    city=json["city"]
    state=json["state"]
    zip=json["zip"]
    country=json["country"]
    query="insert into form values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
    values=(fname,lname,mail,pno,dob,gen,add1,add2,city,state,zip,country)

    cur.execute(query,values)
    db.commit()
    cur.execute("Select * from form")
    a=cur.fetchall()
    return(a)



if(__name__=='__main__'):
    app.run(debug=True)