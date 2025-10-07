
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DocparserCollector extends SketchCollector {

    static CONFIG = {
        id: "docparser",
        name: "Docparser",
        description: "i18n.collectors.docparser.description",
        version: "0",
        website: "https://app.docparser.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67883.jpg",
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
        entryUrl: "https://app.docparser.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocparserCollector.CONFIG);
    }
}
