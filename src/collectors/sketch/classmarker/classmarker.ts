
import { SketchCollector } from '../../sketchCollector';

export class ClassmarkerCollector extends SketchCollector {

    static CONFIG = {
        id: "classmarker",
        name: "Classmarker",
        description: "i18n.collectors.classmarker.description",
        version: "0",
        website: "https://www.classmarker.com/a/myaccount/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245907.jpg",
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
        entryUrl: "https://www.classmarker.com/a/myaccount/",
    }

    constructor() {
        super(ClassmarkerCollector.CONFIG);
    }
}
