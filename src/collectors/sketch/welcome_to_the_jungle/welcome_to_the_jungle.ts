
import { SketchCollector } from '../../sketchCollector';

export class WelcomeToTheJungleCollector extends SketchCollector {

    static CONFIG = {
        id: "welcome_to_the_jungle",
        name: "Welcome to the Jungle",
        description: "i18n.collectors.welcome_to_the_jungle.description",
        version: "0",
        website: "https://www.welcomekit.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419712.jpg",
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
        entryUrl: "https://www.welcomekit.co/",
    }

    constructor() {
        super(WelcomeToTheJungleCollector.CONFIG);
    }
}
