
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlipsoInternetGarsAmKampCollector extends SketchCollector {

    static CONFIG = {
        id: "klipso_internet_gars_am_kamp",
        name: "Klipso Internet Gars am Kamp",
        description: "i18n.collectors.klipso_internet_gars_am_kamp.description",
        version: "0",
        website: "http://rechnung.klipso.at/(F(oEVfjfDE1sNDQjRiEQf061P56SWAlmNk2feW3k4fPLygV7C8FVU1DW_r7i_GVeR1I2XbXYYkyMAkbOF8oOaYsLcIQOalGLb2OXVgBzIjlNNj-wDvF4imFxCds6Df-6F79A3hEJMJLs1ft1et8z5oUdgxaX04LIsDhe79Nt_ZBCk1))/NonPublic/Rechnungen.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1324806.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "http://rechnung.klipso.at/(F(oEVfjfDE1sNDQjRiEQf061P56SWAlmNk2feW3k4fPLygV7C8FVU1DW_r7i_GVeR1I2XbXYYkyMAkbOF8oOaYsLcIQOalGLb2OXVgBzIjlNNj-wDvF4imFxCds6Df-6F79A3hEJMJLs1ft1et8z5oUdgxaX04LIsDhe79Nt_ZBCk1))/NonPublic/Rechnungen.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlipsoInternetGarsAmKampCollector.CONFIG);
    }
}
