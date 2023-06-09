import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState();
  const [middlename, setMiddlename] = useState();
  const [lastname, setLastname] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [subcity, setSubcity] = useState();
  const [woreda, setWoreda] = useState();
  const [number, setNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const resetForm = () => {
    setName("");
    setMiddlename("");
    setLastname("");
    setCountry("");
    setCity("");
    setSubcity("");
    setWoreda("");
    setNumber("");
    setBirthdate("");
    setGender("");
    setAge("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();

    fetch("http://localhost:3000/profile/new", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: name,
        lastName: lastname,
        middleName: middlename,
        email: email,
        role: "",
        password: password,
        birthDate: birthdate,
        gender: gender,
        age: age,
      }),
    }).then(() => {
      console.log("posted");
    });
  };

  return (
    <div>
      <div class=" px-1">
        <div class=" p-6 ">
          <div class="grid h-4 place-items-center ">
            <div class=" w-full lg:w-3/5 justify-center items-center bg-white p-5 hover:shadow-xl rounded-lg lg:rounded-l-none">
              <div class="sm:mx-auto sm:w-full sm:max-w-sm pl-16">
                <img src="./image/zuret.png" className="w-64 h-32" />
              </div>
              <h3 class="pt-2 text-2xl text-center">Create an Account!</h3>
              <form
                onSubmit={handleSubmit}
                class="px-8 pt-4  mb-2 bg-white rounded"
              >
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700">
                      First Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="First Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="middleName"
                    >
                      Middle Name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Middle Name"
                      value={middlename}
                      onChange={(e) => setMiddlename(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-3">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="middleName"
                    >
                      Last name
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Last name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="country"
                    >
                      Country
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="city"
                    >
                      City
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-3">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="Subcity"
                    >
                      Subcity
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Subcity"
                      value={subcity}
                      onChange={(e) => setSubcity(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="woreda"
                    >
                      Woreda
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="woreda"
                      value={woreda}
                      onChange={(e) => setWoreda(e.target.value)}
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="housenumber"
                    >
                      House number
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline min=1"
                      type="number"
                      placeholder="Housenumber"
                      min="1"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="birthdate"
                    >
                      Birth date
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="date"
                      placeholder="Birth date"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}

                      //
                    />
                  </div>
                  <div class="md:ml-2">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="Gender"
                    >
                      Gender
                    </label>
                    <select
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div class="md:ml-3">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="Age"
                    >
                      Age
                    </label>
                    <input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="age"
                      type="number"
                      placeholder="Age"
                      min="5"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-4 md:flex md:justify-between">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline    required"
                      id="password"
                      type="password"
                      placeholder="******************"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="text-white w-full px-4 py-2 bg-rose-900 border hover:border-rose-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
              </form>
              <hr class=" border-t" />

              <div class="text-center flex justify-center items-center ">
                <span className="mr-2 ">Already have an account? </span>
                <a
                  class="inline-block  text-rose-800 align-baseline hover:text-rose-500"
                  href="/login"
                >
                  Login!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
