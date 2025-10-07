
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DigitickComCollector extends SketchCollector {

    static CONFIG = {
        id: "digitick_com",
        name: "Digitick.com",
        description: "i18n.collectors.digitick_com.description",
        version: "0",
        website: "https://www.digitick.com/customerservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117228.jpg",
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
        entryUrl: "https://www.digitick.com/customerservice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigitickComCollector.CONFIG);
    }
}
