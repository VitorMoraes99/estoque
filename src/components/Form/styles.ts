.container {
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;
  }
  
  @media (max-width: 750px) {
    .container {
      display: grid;
    }
  }
  
  .inputContent {
    display: flex;
    flex-direction: column;
  }
  
  label {
  }
  
  input {
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
  }
  
  .radioGroup {
    display: flex;
    align-items: center;
  }
  
  .radioGroup input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
  
  .button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
  }
  