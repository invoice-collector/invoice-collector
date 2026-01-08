
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SatelliteOfficeCollector extends SketchCollector {

    static CONFIG = {
        id: "satellite_office",
        name: "Satellite Office",
        description: "i18n.collectors.satellite_office.description",
        version: "0",
        website: "http://www.satelliteoffice.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20866.jpg",
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
        loginUrl: "http://www.satelliteoffice.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SatelliteOfficeCollector.CONFIG);
    }
}
