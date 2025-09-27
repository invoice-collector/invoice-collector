
import { SketchCollector } from '../../sketchCollector';

export class GptTrainerCollector extends SketchCollector {

    static CONFIG = {
        id: "gpt_trainer",
        name: "GPT-Trainer",
        description: "i18n.collectors.gpt_trainer.description",
        version: "0",
        website: "https://app.gpt-trainer.com/site/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4514178.jpg",
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
        entryUrl: "https://app.gpt-trainer.com/site/login",
    }

    constructor() {
        super(GptTrainerCollector.CONFIG);
    }
}
