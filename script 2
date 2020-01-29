class vehicule {

}

constructor (name) (
  this.name = name || "vehicule";
}
}

class voiture extends vehicule {

  constructor() (
    super();
    this.name = "voiture";
    this.roues = 4;
    this.porte = 5;
    this.moteur = {
      puissance: 60
    };
    this.voyants = {
      marche: false
    }

  }
  contact() {
    console.log("on allume le contact");
    this.allumelesVoyants();
  }

allumelesVoyants(){
  console.log("Les voyants s'allume");
  this.voyants.marche = true;
}

decontact(){
  console.log("on coupe le contact");
  this.eteindreLesVoyants();
}

eteindreLesVoyants(){
  console.log("Les voyants s'éteigne");
  this.voyants.marche = false;
}

  demarre() {
    console.log("demarre le moteur");
  }
  coupe(){
    console.log("on coupe le moteur");
    this.moteur.marche = false;
  }
}

class sportive extends {

constructor(name) {
  super(name || "voiture");
  this.porte = 5;
  this.moteur.puissance = 450;

}

}

const test_vehicule = () => (

  console.log("test vehicule");

  let maVoiture = new sportive(ma porche);

  console.log(maVoiture.moteur);

  maVoiture.contact();
  maVoiture.demarre();
};
