
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlantForThePlanetCollector extends SketchCollector {

    static CONFIG = {
        id: "plant_for_the_planet",
        name: "Plant for the Planet",
        description: "i18n.collectors.plant_for_the_planet.description",
        version: "0",
        website: "https://www1.plant-for-the-planet.org/profile/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1307401.jpg",
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
        loginUrl: "https://www1.plant-for-the-planet.org/profile/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PlantForThePlanetCollector.CONFIG);
    }
}
