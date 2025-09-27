
import { SketchCollector } from '../../sketchCollector';

export class FlatfileCollector extends SketchCollector {

    static CONFIG = {
        id: "flatfile",
        name: "flatfile",
        description: "i18n.collectors.flatfile.description",
        version: "0",
        website: "https://app.flatfile.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/803040.jpg",
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
        entryUrl: "https://app.flatfile.io/login",
    }

    constructor() {
        super(FlatfileCollector.CONFIG);
    }
}
