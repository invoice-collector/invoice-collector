
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RadioCoCollector extends SketchCollector {

    static CONFIG = {
        id: "radio_co",
        name: "radio.co",
        description: "i18n.collectors.radio_co.description",
        version: "0",
        website: "https://studio.radio.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985646.jpg",
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
        entryUrl: "https://studio.radio.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RadioCoCollector.CONFIG);
    }
}
