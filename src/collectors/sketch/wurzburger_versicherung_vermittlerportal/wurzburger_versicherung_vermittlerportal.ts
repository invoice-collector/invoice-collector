
import { SketchCollector } from '../../sketchCollector';

export class WurzburgerVersicherungVermittlerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "wurzburger_versicherung_vermittlerportal",
        name: "Wurzburger Versicherung - Vermittlerportal",
        description: "i18n.collectors.wurzburger_versicherung_vermittlerportal.description",
        version: "0",
        website: "https://www.wuerzburger.com/vermittlerportal/logon.aspx?ReturnUrl=%2fvermittlerportal%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56818.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.wuerzburger.com/vermittlerportal/logon.aspx?ReturnUrl=%2fvermittlerportal%2f",
    }

    constructor() {
        super(WurzburgerVersicherungVermittlerportalCollector.CONFIG);
    }
}
