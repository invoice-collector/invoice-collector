
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LemlistCollector extends SketchCollector {

    static CONFIG = {
        id: "lemlist",
        name: "Lemlist",
        description: "i18n.collectors.lemlist.description",
        version: "0",
        website: "https://app.lemlist.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178811.jpg",
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
        entryUrl: "https://app.lemlist.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LemlistCollector.CONFIG);
    }
}
