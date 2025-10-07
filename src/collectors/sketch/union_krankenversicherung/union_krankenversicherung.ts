
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnionKrankenversicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "union_krankenversicherung",
        name: "Union Krankenversicherung",
        description: "i18n.collectors.union_krankenversicherung.description",
        version: "0",
        website: "https://www.ukv.de/content/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777014.jpg",
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
        entryUrl: "https://www.ukv.de/content/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnionKrankenversicherungCollector.CONFIG);
    }
}
