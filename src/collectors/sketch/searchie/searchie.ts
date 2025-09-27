
import { SketchCollector } from '../../sketchCollector';

export class SearchieCollector extends SketchCollector {

    static CONFIG = {
        id: "searchie",
        name: "SEARCHIE",
        description: "i18n.collectors.searchie.description",
        version: "0",
        website: "https://app.searchie.io/login?_fs=0d684fd8-0964-4299-8a92-85600876d291",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/799471.jpg",
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
        entryUrl: "https://app.searchie.io/login?_fs=0d684fd8-0964-4299-8a92-85600876d291",
    }

    constructor() {
        super(SearchieCollector.CONFIG);
    }
}
