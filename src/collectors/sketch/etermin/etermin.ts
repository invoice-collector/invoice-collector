
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EterminCollector extends SketchCollector {

    static CONFIG = {
        id: "etermin",
        name: "eTermin",
        description: "i18n.collectors.etermin.description",
        version: "0",
        website: "https://www.etermin.net/manage.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74057.jpg",
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
        entryUrl: "https://www.etermin.net/manage.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EterminCollector.CONFIG);
    }
}
