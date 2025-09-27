
import { SketchCollector } from '../../sketchCollector';

export class WorldOfSweetsCollector extends SketchCollector {

    static CONFIG = {
        id: "world_of_sweets",
        name: "World of Sweets",
        description: "i18n.collectors.world_of_sweets.description",
        version: "0",
        website: "http://www.worldofsweets.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57473.jpg",
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
        entryUrl: "http://www.worldofsweets.de",
    }

    constructor() {
        super(WorldOfSweetsCollector.CONFIG);
    }
}
