# Fugro MapView Actions

This widget includes buttons that perform actions a user may want to make on a selected record from a feature layer datasource. It takes inspiration from the BarentsWatch application's vessel popups.

## How to use the sample

Clone the [Developer edition of Experience Builder development course repo](https://github.com/fugro/fugro.exb.esri.widget.development) to the root of your developer edition's `/client` directory. Then, within the `/client`, execute the `npm start` command as you would for any other Experience Builder widget. This widget will be available in the Experience Builder developer edition under the "Custom" category, having the name "Fugro MapView Actions".

## How it works

At the moment, this widget's Settings panel allows the end user to select a Map widget, a data source, and has placeholders to add a number input with label for the number of rings and another placeholder for the ring radius increment distance and distance unit.  

Please create a new branch named `<person>/<settings>` and add work to add the missing UI to the Settings panel. The widget will need to also hold range circles properties:values in the state. That is extra credit. 😊
