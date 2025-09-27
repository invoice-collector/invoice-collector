
import { SketchCollector } from '../../sketchCollector';

export class SkillzCollector extends SketchCollector {

    static CONFIG = {
        id: "skillz",
        name: "Skillz",
        description: "i18n.collectors.skillz.description",
        version: "0",
        website: "https://developers.skillz.com/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2554841.jpg",
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
        entryUrl: "https://developers.skillz.com/statements",
    }

    constructor() {
        super(SkillzCollector.CONFIG);
    }
}
