class KeyboardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A keyboard was submitted: ');
    event.preventDefault();
    var frm = $(document.myform);
    var data = getFormData(frm);
    console.log(data);
    fetch('http://localhost:8080/keyboard', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: "cors"
})

console.log(JSON.stringify(data).length);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} name="myform">
          Name:<br/>
          <input type="text" name="name" defaultValue="Roccat keyboard"/>
          <br/>
          Price tag:<br/>
          <input type="number" name="price" defaultValue="99.99"/>
          <br/>
          Weight (kg):<br/>
          <input type="number" name="weight" defaultValue="2"/>
          <br/>
          Memory:<br/>
          <input type="number" name="memory" defaultValue="144"/>
          <br/>
		  Wireless:<br/>
          <input type="checkbox" name="wireless"/>
          <br/>
          Picture:<br/>
          <input type="text" name="picture" defaultValue="http://www.novelupdates.com/img/noimagefound.jpg"/>
          <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

ReactDOM.render(
            <KeyboardForm/>,
            document.getElementById('root')
        );