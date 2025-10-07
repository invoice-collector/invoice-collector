
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IntervoipCollector extends SketchCollector {

    static CONFIG = {
        id: "intervoip",
        name: "Intervoip",
        description: "i18n.collectors.intervoip.description",
        version: "0",
        website: "https://www.intervoip.com/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/390091.jpg",
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
        entryUrl: "https://www.intervoip.com/purchases",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntervoipCollector.CONFIG);
    }
}
