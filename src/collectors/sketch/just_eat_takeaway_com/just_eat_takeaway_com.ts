
import { SketchCollector } from '../../sketchCollector';

export class JustEatTakeawayComCollector extends SketchCollector {

    static CONFIG = {
        id: "just_eat_takeaway_com",
        name: "Just Eat - Takeaway.com",
        description: "i18n.collectors.just_eat_takeaway_com.description",
        version: "0",
        website: "https://restaurants.takeaway.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1219800.jpg",
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
        entryUrl: "https://restaurants.takeaway.com",
    }

    constructor() {
        super(JustEatTakeawayComCollector.CONFIG);
    }
}
