class Carusel {
  constructor(selector, cardClass, data, settings) {
    this.selector = selector;
    this.cardClass = cardClass;
    this.data = data;
    this.settings = settings;
    this.caruselDOM = null;

    this.size = {
      mobile: 1,
      tablet: 1,
      desktop: 1,
    };
    this.previousNext = true;
    this.dots = true;

    this.init();
  }

  init() {
    if (!this.isValidSelector()) {
      return [true, 'Neteisingas selector'];
    }
    if (!this.isValidData()) {
      return [true, 'Neteisingi data'];
    }
    if (!this.findTargetElement()) {
      return [true, 'Pagal pateikta selector nepavyko rasti norimo elemento'];
    }
    this.updateDefaultSettings();
    this.render();
  }

  isValidSelector() {
    if (typeof this.selector !== 'string' || this.selector === '') {
      return false;
    }
    return true;
    // return typeof this.selector === string && this.selector !== '';
  }

  isValidData() {
    if (!this.isObject(this.data)) {
      return false;
    }
    return true;
  }

  findTargetElement() {
    this.caruselDOM = document.querySelector(this.selector);
    return !!this.caruselDOM;
  }

  isObject(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return false;
    }
    return true;
  }

  updateDefaultSettings() {
    if (!this.isObject(this.settings)) {
      return false;
    }
    if (this.isObject(this.settings.size)) {
      if (
        Number.isInteger(this.settings.size.mobile) &&
        this.settings.size.mobile > 0
      ) {
        this.size.mobile = this.settings.size.mobile;
      }
      if (
        Number.isInteger(this.settings.size.tablet) &&
        this.settings.size.tablet > 0
      ) {
        this.size.mobile = this.settings.size.tablet;
      }
      if (
        Number.isInteger(this.settings.size.desktop) &&
        this.settings.size.desktop > 0
      ) {
        this.size.mobile = this.settings.size.desktop;
      }
    }
    if (typeof this.settings.previousNext === 'boolean') {
      this.previousNext = this.settings.previousNext;
    }
    if (typeof this.settings.dots === 'boolean') {
      this.dots = this.settings.dots;
    }
  }

  listHTML() {
    return `<div class="list-view">
    <div class="list">
      <div class="card">
        <img class="img" src="./img/user1.webp" alt="first user" />
        <div class="desc">
          <p>
            Do you want to be even more successful? Learn to love
            learning and growth. The more effort you put into improving
            your skills, the bigger the payoff you.
          </p>
          <h4>Harriet Maxwell</h4>
          <p>CEO at Google</p>
        </div>
      </div>
      <div class="card">
        <img src="./img/user2.webp" alt="second user" />
        <div class="desc">
          <p>
            A purpose is the eternal condition for success. Every former
            smoker can tell you just how hard it is to stop smoking
            cigarettes. However.
          </p>
          <h4>Carolyn Craig</h4>
          <p>CEO at Facebook</p>
        </div>
      </div>
      <div class="card">
        <img class="img" src="./img/user3.jpg" alt="third user" />
        <div class="desc">
          <p>
            Do you want to be even more successful? Learn to love
            learning and growth. The more effort you put into improving
            your skills, the bigger the payoff you.
          </p>
          <h4>Anna Berkins</h4>
          <p>CEO at Instagram</p>
        </div>
      </div>
      <div class="card">
        <img src="./img/user4.jpg" alt="fourth user" />
        <div class="desc">
          <p>
            A purpose is the eternal condition for success. Every former
            smoker can tell you just how hard it is to stop smoking
            cigarettes. However.
          </p>
          <h4>Amanda Right</h4>
          <p>CEO at LinkedIn</p>
        </div>
      </div>
      <div class="card">
        <img src="./img/user5.jpg" alt="fifth user" />
        <div class="desc">
          <p>
            A purpose is the eternal condition for success. Every former
            smoker can tell you just how hard it is to stop smoking
            cigarettes. However.
          </p>
          <h4>Jessica Parker</h4>
          <p>CEO at Twitter</p>
        </div>
      </div>
    </div>
  </div>`;
  }

  actionsHTML() {
    if (!this.previousNext && !this.dots) {
      return '';
    }

    let arrowDownHTML = '';
    let arrowUpHTML = '';
    let dotsHTML = '';

    if (this.previousNext) {
      arrowDownHTML = '<span class="lnr lnr-arrow-down prev"></span>';
      arrowUpHTML = '<span class="lnr lnr-arrow-up prev"></span>';
    }
    if (this.dots) {
      dotsHTML =
        '<div class="dots"><div class="dot active"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
    }
    return `<div class="actions">
    ${dotsHTML}
    <div class="previousNext">
     ${arrowDownHTML}
     ${arrowUpHTML}
    </div>
  </div>`;
  }

  render() {
    const HTML = this.listHTML() + this.actionsHTML();

    this.caruselDOM.innerHTML = HTML;
  }
}

export { Carusel };
