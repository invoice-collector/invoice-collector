
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JerseyCityMunicipalVeoliaWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "jersey_city_municipal_veolia_water",
        name: "Jersey City Municipal  - Veolia Water",
        description: "i18n.collectors.jersey_city_municipal_veolia_water.description",
        version: "0",
        website: "https://mywater.veolia.us/jersey-city-mua/standard-home?_gl=1*1jjiwgr*_ga*MTAwNzcwOTI0Mi4xNzAzNzgxODI5*_ga_37RC2MZRT4*MTcxNTYxMzk1My4yNi4xLjE3MTU2MTQxOTYuMC4wLjA.",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798723.jpg",
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
        loginUrl: "https://mywater.veolia.us/jersey-city-mua/standard-home?_gl=1*1jjiwgr*_ga*MTAwNzcwOTI0Mi4xNzAzNzgxODI5*_ga_37RC2MZRT4*MTcxNTYxMzk1My4yNi4xLjE3MTU2MTQxOTYuMC4wLjA.",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JerseyCityMunicipalVeoliaWaterCollector.CONFIG);
    }
}
