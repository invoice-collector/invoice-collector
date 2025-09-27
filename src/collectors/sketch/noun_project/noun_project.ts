
import { SketchCollector } from '../../sketchCollector';

export class NounProjectCollector extends SketchCollector {

    static CONFIG = {
        id: "noun_project",
        name: "Noun Project",
        description: "i18n.collectors.noun_project.description",
        version: "0",
        website: "https://thenounproject.com/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8808.jpg",
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
        entryUrl: "https://thenounproject.com/accounts/login/",
    }

    constructor() {
        super(NounProjectCollector.CONFIG);
    }
}
