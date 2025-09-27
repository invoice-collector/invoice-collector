
import { SketchCollector } from '../../sketchCollector';

export class Icons8Collector extends SketchCollector {

    static CONFIG = {
        id: "icons8",
        name: "Icons8",
        description: "i18n.collectors.icons8.description",
        version: "0",
        website: "https://icons8.com/register/?back=https%3A%2F%2Ficons8.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52190.jpg",
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
        entryUrl: "https://icons8.com/register/?back=https%3A%2F%2Ficons8.com%2F",
    }

    constructor() {
        super(Icons8Collector.CONFIG);
    }
}
