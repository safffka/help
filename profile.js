import React, { Component } from "react";
import Loading from "./loader";

class Profile extends Component {
  state = {
    data:[],
    login:false
  };

  async componentDidMount() {
    try {
      const API_ADDRESS = process.env.REACT_APP_API_ADDRESS;
      const res = await fetch(`${API_ADDRESS}profile/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });

      const data = await res.json();
      if(data["detail"] === "Signature has expired."){
        alert("Время сессии истекло. Пожалуйста выполните вход.");
        document.getElementById("logoutBttn").click();
      }
      this.setState({
        data
      });
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    function formatDate (input) {
      var date  = input.slice(0, 10);
      if (date.toString() === "None"){
        return "";
      }
      var datePart = input.match(/\d+/g),
      year = datePart[0].substring(0), // get only two digits
      month = datePart[1], day = datePart[2];
      return day+'.'+month+'.'+year;
    }

    var key = this.state.data[0];
    if(key !== undefined){
      var data = JSON.parse(this.state.data)[0];
      var type = data['type']
      var isPhysical = false;
      if (type === "Ф"){
        isPhysical = true;
      }
      var fullname = data['fullname'];
      var shortname = data['name'];

      var typedoc = data['typedoc']
      var passportnumber = data['passportnumber'];
      var passportdate = formatDate(data['passportdate']);
      var passportissued = data['passportissued'];
      var birthdate = formatDate(data['birthdate']);
      var year = new Date().getFullYear()
      var age = parseInt(year) - parseInt(data['birthdate'].slice(0, 4));

      var efficiency = data['efficiency'];
      if (efficiency === "Д"){
        efficiency = "Недееспособный"
      }
      else{
        efficiency = "Дееспособный"
      }
      var citizenship = data['citizenship'];
      var birthplace = data['birthplace'];
      var inn = data['inn'];
      var placeindex = data['placeindex'];
      var placecountry = data['placecountry'];
      var placeregion = data['placeregion'];
      var placeaddress = data['placeaddress'];
      var passportcode = data['passportcode']
      var corplaceindex = data['corplaceindex'];
      var corplacecountry = data['corplacecountry'];
      var corplaceregion = data['corplaceregion'];
      var corplaceaddress = data['corplaceaddress'];
      var homephone = data['homephone'];
      var workphone = data['workphone'];
      var email = data['email'];
      var registrygetttype = data['registrygetttype'];
      //var dividendgetttype = data['dividendgetttype'];
      //var osamessages = data['osamessages'];
      var bankname = data['bankname'];
      var bankcode = data['bankcode'];
      var bankaccount = data['bankaccount'];
      var correspondentaccount = data['correspondentaccount'];
      var bankinn = data['bankinn'];
      var bankbranch = data['bankbranch'];
      var personalaccount = data['ls'];
      var bankcountry = data['bankcountry'];
      //var subdivision = data['subdivision'];
      //var personalnumber = data['personalnumber'];
      var ogrn = data['ogrn'];
      var dtogrn = formatDate(data['dtogrn']);
      var givogrn = data['givogrn'];
      var regnum =  data['regnum'];
      var fax = data['fax']
      //var activityfield = data['activityfield']
    }

    if(key !== undefined)
    {
        return (
          <div className="selectForm2 middleForm2 bigLetters">
            <div>
            <label className="shadow"> Персональные данные </label>
            <div className="holder">
                <div className="wrapper">
                    <div>
                        {isPhysical ? (
                          <label>Фамилия, имя, отчество </label>
                        ) : (
                          <label>Полное наименование </label>
                        )}
                    </div>
                    <div><span className="formSpan" id="fullname" name="fullname"  disabled="disabled"> {fullname}</span>
                    </div>
                    <div>
                        {isPhysical ? (
                          <label>Фамилия, инициалы</label>
                        ) : (
                          <label>Краткое наименование</label>
                        )}
                    </div>

                    <div>
                        <input type="text" id="shortname" name="shortname"  disabled="disabled" value={shortname}/>
                    </div>
                </div>
                </div>
                  <label className="shadow">Удостоверяющий документ</label>
                  <div className="holder">
                  {isPhysical ? (
                    <>
                    <div className="wrapper1">
                      <div className="wrapper1">
                        <div>
                        <label>Название</label>
                        </div>
                        <div>
                              <input type="text" id="passport" name="passport"  disabled="disabled" value={typedoc}/>
                        </div>
                      </div>
                      <div className="wrapper1">
                        <div>
                              <label>Серия, номер</label>
                        </div>
                        <div>
                              <input type="text" id="passportnumber" name="passportnumber"  disabled="disabled" value={passportnumber}/>
                        </div>
                      </div>
                      <div className="wrapper1">
                        <div>
                              <label>Выдан</label>
                        </div>
                        <div>
                              <input type="text" id="passportdate" name="passportdate"  disabled="disabled" value={passportdate}/>
                        </div>

                        </div>
                        <div>
                              <span className="formSpan longSpan" id="passportissued" name="passportissued"  disabled="disabled"> {passportissued} </span>
                        </div>
                      </div>
                        <div>
                        </div>
                      <div className="wrapper ">
                        <div>
                              <label>Код подр.</label>
                        </div>
                        <div>
                              <input type="text" id="passportcode" name="passportcode"  disabled="disabled" value={passportcode}/>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                        <div>
                            <label>Основной государственный регистрационный номер(ОГРН)</label>
                        </div>
                        <div className="wrapper1">
                          <div className="wrapper1">
                        <div>
                              <label>ОГРН</label>
                        </div>

                        <div>
                            <input type="text" id="ogrn" name="ogrn"  disabled="disabled" value={ogrn}/>
                        </div>
                        </div>
                        <div className="wrapper1">
                        <div>
                              <label>Выдан</label>
                        </div>
                        <div>
                              <input type="text" id="dtogrn" name="dtogrn"  disabled="disabled" value={dtogrn}/>
                        </div>
                        </div>
                        <div className="wrapper1">
                        <div>
                              <label>Орган выдачи(ОГРН)</label>
                        </div>
                        <div>

                              <input type="text" id="givogrn" name="givogrn"  disabled="disabled" value={givogrn}/>
                              <span className="tooltiptext">{givogrn}</span>
                        </div>
                        </div>
                        </div>
                    </>
                  )}
                  {isPhysical ? (
                    <>
                    <div className="wrapper">
                        <div>
                            <label>Дата рождения</label>
                        </div>
                        <div>
                              <input type="text" id="birthdate" name="birthdate"  disabled="disabled" value={birthdate}/>
                        </div>
                        <div>
                              <label>Дееспособность</label>
                        </div>
                        <div >
                              <input type="text" id="efficiency" name="efficiency"  disabled="disabled" value={efficiency}/>
                        </div>
                        <div>
                              <label>Гражданство</label>
                        </div>
                        <div>
                              <input type="text" id="citizenship" name="citizenship"  disabled="disabled" value={citizenship}/>
                        </div>

                        <div>
                              <label>Возраст</label>
                        </div>
                        <div>
                              <input type="text" id="age" name="age"  disabled="disabled" value={age}/>
                        </div>
                        <div>
                              <label>Место рождения</label>
                        </div>
                        <div>
                              <input type="text" id="birthplace" name="birthplace"  disabled="disabled" value={birthplace}/>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    <div className="wrapper">
                        <div>
                              <label>№ гос. регистрации</label>
                        </div>
                        <div>
                            <input type="text" id="regnum" name="regnum"  disabled="disabled" value={regnum}/>
                        </div>
                        <div>
                              <label>Дата</label>
                        </div>
                        <div>
                              <input type="text" id="regdate" name="regdate"  disabled="regdate" value={passportdate}/>
                        </div>
                        <div>
                              <label>Орган регистрации</label>
                        </div>
                        <div>
                              <input type="text" id="regorg" name="regorg"  disabled="regorg" value={passportissued}/>
                              <span className="tooltiptext">{passportissued}</span>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="wrapper">
                  <div>
                        <label>ИНН</label>
                  </div>
                  <div>
                        <input type="text" id="inn" name="inn"  disabled="disabled" value={inn}/>
                  </div>
                  {isPhysical ? (
                    <div>
                    </div>
                  ) : (
                    <>
                        <div>
                            <label>Юрисдикция</label>
                        </div>
                        <div>
                            <input type="text" id="jurisdiction" name="jurisdiction"  disabled="disabled" value={citizenship}/>
                        </div>
                    </>
                  )}
                  </div>
                  <div>
                  </div>
                  </div>
                  <div>
                        <label className="shadow">Место проживания [регистрации]</label>
                  </div>
                  <div className="holder">
                  <div >
                  </div>
                  <div className="wrapper">

                  <div>
                        <label>Индекс</label>
                  </div>
                  <div>
                        <input type="text" id="placeindex" name="placeindex"  disabled="disabled" value={placeindex}/>
                  </div>
                  <div>
                        <label>Страна</label>
                  </div>
                  <div>
                        <input type="text" id="placecountry" name="placecountry"  disabled="disabled" value={placecountry}/>
                  </div>
                  <div>
                        <label>Область</label>
                  </div>
                  <div>
                        <input type="text" id="placeregion" name="placeregion"  disabled="disabled" value={placeregion}/>
                  </div>

                  <div>
                        <label>Адрес</label>
                  </div>
                  <div>
                        <span className="formSpan" type="text" id="placeaddress" name="placeaddress"  disabled="disabled"> {placeaddress} </span>
                  </div>
                  <div>
                  </div>
                  <div>
                  </div>
                  </div>

                  </div>
                        <label className="shadow">Адрес для направления корреспонденции</label>
                  </div>
                  <div>
                  <div className="holder">
                  <div className="wrapper">

                  <div>
                        <label>Индекс</label>
                  </div>
                  <div>
                        <input type="text" id="corplaceindex" name="corplaceindex"  disabled="disabled" value={corplaceindex}/>
                  </div>
                  <div>
                        <label>Страна</label>
                  </div>
                  <div>
                        <input type="text" id="corplacecountry" name="corplacecountry"  disabled="disabled" value={corplacecountry}/>
                  </div>
                  <div>
                        <label>Область</label>
                  </div>
                  <div>
                        <input type="text" id="corplaceregion" name="corplaceregion"  disabled="disabled" value={corplaceregion}/>
                  </div>

                  <div>
                        <label>Адрес</label>
                  </div>

                  <div>
                        <span className="formSpan" type="text" id="corplaceaddress" name="corplaceaddress"> {corplaceaddress} </span>
                  </div>
                  </div>
                  </div>
                  <div>
                    <label className="shadow">Контактные данные</label>
                  </div>
                  <div className = "holder">
                  <div className="wrapper">

                  {isPhysical ? (
                    <>
                        <div>
                              <label>Телефон домашний</label>
                        </div>
                        <div>
                              <input type="text" id="homephone" name="homephone"  disabled="disabled" value={homephone}/>
                        </div>

                        <div>
                              <label>Телефон рабочий</label>
                        </div>
                        <div>
                              <input type="text" id="workphone" name="workphone"  disabled="disabled" value={workphone}/>
                        </div>
                        <div>
                              <label>E-mail</label>
                        </div>
                        <div>
                              <input type="text" id="email" name="email"  disabled="disabled" value={email}/>
                        </div>
                    </>
                  ) : (
                    <>
                        <div>
                              <label>Телефон рабочий</label>
                        </div>
                        <div>
                              <input type="text" id="workphone" name="workphone"  disabled="disabled" value={workphone}/>
                        </div>
                        <div>
                              <label>Факс</label>
                        </div>
                        <div>
                              <input type="text" id="fax" name="fax"  disabled="disabled" value={fax}/>
                        </div>
                        <div>
                              <label>E-mail</label>
                        </div>
                        <div>
                              <input type="text" id="email" name="email"  disabled="disabled" value={email}/>
                        </div>
                        <div>
                              <label>ОКФС</label>
                        </div>
                        <div>
                              <input type="text" id="okfs" name="okfs"  disabled="disabled" value="NOT EXIST"/>
                        </div>
                    </>
                  )}

                  <div>
                        <label>Способ получения выписок из реестра </label>
                  </div>
                  <div>
                        <input type="text" id="registrygettype" name="registrygetttype"  disabled="disabled" value={registrygetttype}/>
                  </div>

                  </div>
                  </div>
                  <div>
                    <label className="shadow">Банковские реквизиты</label>
                  </div>
                  <div className="holder">
                  <div className="wrapper">

                  <div>
                        <label>БИК </label>
                  </div>
                  <div>
                        <input type="text" id="bankcode" name="bankcode"  disabled="disabled" value={bankcode}/>
                  </div>
                  <div>
                        <label>Банк </label>
                  </div>
                  <div>
                        <input type="text" id="bankname" name="bankname"  disabled="disabled" value={bankname}/>
                  </div>

                  <div>
                        <label>Р/с банка </label>
                  </div>
                  <div>
                        <input type="text" id="bankaccount" name="bankaccount"  disabled="disabled" value={bankaccount}/>
                  </div>
                  <div>
                        <label>Корр/сч</label>
                  </div>
                  <div>
                        <input type="text" id="correspondentaccount" name="correspondentaccount"  disabled="disabled" value={correspondentaccount}/>
                  </div>

                  <div>
                        <label>ИНН банка </label>
                  </div>
                  <div>
                        <input type="text" id="bankinn" name="bankinn"  disabled="disabled" value={bankinn}/>
                  </div>
                  <div>
                        <label>Отделение</label>
                  </div>
                  <div>
                        <input type="text" id="bankbranch" name="bankbranch"  disabled="disabled" value={bankbranch}/>
                  </div>

                  <div>
                        <label>Л/с </label>
                  </div>
                  <div>
                        <input type="text" id="personalaccount" name="personalaccount"  disabled="disabled" value={personalaccount}/>
                  </div>
                  <div>
                        <label>Налоговые льготы</label>
                  </div>
                  <div>
                  {isPhysical ? (
                      <input type="text" id="incentives" name="incentives"  disabled="disabled" value="Физическое лицо(нет льгот)"/>
                  ) : (
                      <input type="text" id="incentives" name="incentives"  disabled="disabled" value="Юридическое лицо"/>
                  )}

                  </div>

                  <div>
                        <label>Страна </label>
                  </div>
                  <div>
                        <input type="text" id="bankcountry" name="bankcountry"  disabled="disabled" value={bankcountry}/>
                  </div>
                  </div>
                  </div>
                  <div>
                        <label className="shadow">Получатель платежа</label>
                  </div>
                  <div className="holder">
                  <div className="wrapper">
                  <div>
                    <label>Наименование</label>
                  </div>
                  <div>
                    <input type="text" id="payreceivername" name="payreceivername"  disabled="disabled" value=""/>
                  </div>
                  <div>
                    <label>ИНН</label>
                  </div>
                  <div>
                    <input type="text" id="payreceiverinn" name="payreceiverinn"  disabled="payreceiverinn" value=""/>
                  </div>

                  <div>
                    <label>Назначение</label>
                  </div>
                  <div>
                    <input type="text" id="appointment" name="appointment"  disabled="disabled" value=""/>
                  </div>
                  </div>
                  </div>
                </div>

          </div>
        );
      }
      else {
        return(
          <>
          <Loading/>
          </>
        );
      }
  }
}

export default Profile;
