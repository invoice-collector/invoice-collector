
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlectraCollector extends SketchCollector {

    static CONFIG = {
        id: "alectra",
        name: "alectra",
        description: "i18n.collectors.alectra.description",
        version: "0",
        website: "https://myaccount.alectrautilities.com/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778101.jpg",
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
        entryUrl: "https://myaccount.alectrautilities.com/app/login.jsp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlectraCollector.CONFIG);
    }
}
