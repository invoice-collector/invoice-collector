
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImogentComCollector extends SketchCollector {

    static CONFIG = {
        id: "imogent_com",
        name: "IMOGENT.com",
        description: "i18n.collectors.imogent_com.description",
        version: "0",
        website: "https://app.imogent.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1423357.jpg",
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
        entryUrl: "https://app.imogent.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImogentComCollector.CONFIG);
    }
}
