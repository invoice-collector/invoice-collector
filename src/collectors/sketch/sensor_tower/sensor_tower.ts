
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SensorTowerCollector extends SketchCollector {

    static CONFIG = {
        id: "sensor_tower",
        name: "Sensor Tower",
        description: "i18n.collectors.sensor_tower.description",
        version: "0",
        website: "http://www.sensortower.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54066.jpg",
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
        loginUrl: "http://www.sensortower.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SensorTowerCollector.CONFIG);
    }
}
