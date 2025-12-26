# Task 4
## Flowchart

```mermaid
flowchart TD
    start@{ shape: circle}
    input1@{ shape: lean-r, label: "Input: temp = 34"}
    input2@{ shape: lean-r, label: "Input: tempSource = #quot;Fahrenheit#quot;"}
    input3@{ shape: lean-r, label: "Input: convertTo=  #quot;Reamur#quot;"}
    error@{ shape: lean-r, label: "#quot;ERROR#quot;"}

    ifSource1@{ shape: diamond, label: "tempSource == #quot;Celcius#quot;"}
    ifSource2@{ shape: diamond, label: "tempSource == #quot;Fahrenheit#quot;"}
    ifSource3@{ shape: diamond, label: "tempSource == #quot;Reamur#quot;"}
    ifSource4@{ shape: diamond, label: "tempSource == #quot;Kelvin#quot;"}

    ifCelcius1@{ shape: diamond, label: "convertTo == #quot;Fahrenheit#quot;"}
    ifCelcius2@{ shape: diamond, label: "convertTo == #quot;Reamur#quot;"}
    ifCelcius3@{ shape: diamond, label: "convertTo == #quot;Kelvin#quot;"}

    celciusF@{ label: "outTemp = temp * (9/5) + 32"}
    celciusR@{ label: "outTemp = temp * (4/5)"}
    celciusK@{ label: "outTemp = temp + 273"}



    ifFahrenheit1@{ shape: diamond, label: "convertTo == #quot;Celcius#quot;"}
    ifFahrenheit2@{ shape: diamond, label: "convertTo == #quot;Reamur#quot;"}
    ifFahrenheit3@{ shape: diamond, label: "convertTo == #quot;Kelvin#quot;"}

    fahrenheitC@{ label: "outTemp = temp * (9/5) + 32"}
    fahrenheitR@{ label: "outTemp = temp * (9/4) + 32"}
    fahrenheitK@{ label: "outTemp = 9/5 * (temp - 273) + 32"}


    ifReamur1@{ shape: diamond, label: "convertTo == #quot;Celcius#quot;"}
    ifReamur2@{ shape: diamond, label: "convertTo == #quot;Fahrenheit#quot;"}
    ifReamur3@{ shape: diamond, label: "convertTo == #quot;Kelvin#quot;"}

    reamurC@{ label: "outTemp = temp * (4/5)"}
    reamurF@{ label: "outTemp = 4/9 * (temp-32)"}
    reamurK@{ label: "outTemp = 4/5 * (temp-273)"}


    ifKelvin1@{ shape: diamond, label: "convertTo == #quot;Celcius#quot;"}
    ifKelvin2@{ shape: diamond, label: "convertTo == #quot;Fahrenheit#quot;"}
    ifKelvin3@{ shape: diamond, label: "convertTo == #quot;Reamur#quot;"}

    kelvinC@{ label: "outTemp = temp - 273"}
    kelvinF@{ label: "outTemp = 9/5 * (temp-273)+32"}
    kelvinR@{ label: "outTemp = 4/5 * (temp - 273)"}



start-->input1-->input2-->input3-->ifSource1

ifSource1--false-->ifSource2
ifSource1--true-->ifCelcius1
ifCelcius1--false-->ifCelcius2
ifCelcius1--true-->celciusF
ifCelcius2--false-->ifCelcius3
ifCelcius2--true-->celciusR
ifCelcius3--true-->celciusK
ifCelcius3--false------>error

ifSource2--false-->ifSource3
ifSource2--true-->ifFahrenheit1
ifFahrenheit1--false-->ifFahrenheit2
ifFahrenheit1--true-->fahrenheitC
ifFahrenheit2--false-->ifFahrenheit3
ifFahrenheit2--true-->fahrenheitR
ifFahrenheit3--false----->error
ifFahrenheit3--true-->fahrenheitK

ifSource3--false-->ifSource4
ifSource3--true-->ifReamur1
ifReamur1--false-->ifReamur2
ifReamur1--true-->reamurC
ifReamur2--false-->ifReamur3
ifReamur2--true-->reamurF
ifReamur3--false---->error
ifReamur3--true-->reamurK

ifSource4--false---->error
ifSource4--true-->ifKelvin1
ifKelvin1--false-->ifKelvin2
ifKelvin1--true-->kelvinC
ifKelvin2--false-->ifKelvin3
ifKelvin2--true-->kelvinF
ifKelvin3--false---->error
ifKelvin3--true-->kelvinR

```