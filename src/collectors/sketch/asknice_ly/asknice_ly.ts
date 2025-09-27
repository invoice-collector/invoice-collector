
import { SketchCollector } from '../../sketchCollector';

export class AskniceLyCollector extends SketchCollector {

    static CONFIG = {
        id: "asknice_ly",
        name: "asknice.ly",
        description: "i18n.collectors.asknice_ly.description",
        version: "0",
        website: "https://start.asknice.ly/findlogin/?w=hYZhMRnDCzX7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23019.jpg",
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
        entryUrl: "https://start.asknice.ly/findlogin/?w=hYZhMRnDCzX7",
    }

    constructor() {
        super(AskniceLyCollector.CONFIG);
    }
}
