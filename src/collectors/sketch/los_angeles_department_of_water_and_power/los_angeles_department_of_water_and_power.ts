
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LosAngelesDepartmentOfWaterAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "los_angeles_department_of_water_and_power",
        name: "Los Angeles Department of Water and Power",
        description: "i18n.collectors.los_angeles_department_of_water_and_power.description",
        version: "0",
        website: "http://www.ladwp.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9357.jpg",
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
        loginUrl: "http://www.ladwp.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LosAngelesDepartmentOfWaterAndPowerCollector.CONFIG);
    }
}
