
import { SketchCollector } from '../../sketchCollector';

export class GistronCollector extends SketchCollector {

    static CONFIG = {
        id: "gistron",
        name: "Gistron",
        description: "i18n.collectors.gistron.description",
        version: "0",
        website: "http://www.gistron.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32232.jpg",
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
        entryUrl: "http://www.gistron.com",
    }

    constructor() {
        super(GistronCollector.CONFIG);
    }
}
