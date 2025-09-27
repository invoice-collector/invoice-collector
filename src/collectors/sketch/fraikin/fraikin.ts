
import { SketchCollector } from '../../sketchCollector';

export class FraikinCollector extends SketchCollector {

    static CONFIG = {
        id: "fraikin",
        name: "Fraikin",
        description: "i18n.collectors.fraikin.description",
        version: "0",
        website: "https://customerportal.fraikin.com/login?ec=302&startURL=%2Fs%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1543701.jpg",
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
        entryUrl: "https://customerportal.fraikin.com/login?ec=302&startURL=%2Fs%2F",
    }

    constructor() {
        super(FraikinCollector.CONFIG);
    }
}
