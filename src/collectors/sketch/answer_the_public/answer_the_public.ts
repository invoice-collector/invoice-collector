
import { SketchCollector } from '../../sketchCollector';

export class AnswerThePublicCollector extends SketchCollector {

    static CONFIG = {
        id: "answer_the_public",
        name: "ANSWER THE PUBLIC",
        description: "i18n.collectors.answer_the_public.description",
        version: "0",
        website: "https://answerthepublic.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/820563.jpg",
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
        entryUrl: "https://answerthepublic.com/",
    }

    constructor() {
        super(AnswerThePublicCollector.CONFIG);
    }
}
