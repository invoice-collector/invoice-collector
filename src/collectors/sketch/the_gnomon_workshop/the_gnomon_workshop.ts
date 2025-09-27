
import { SketchCollector } from '../../sketchCollector';

export class TheGnomonWorkshopCollector extends SketchCollector {

    static CONFIG = {
        id: "the_gnomon_workshop",
        name: "The Gnomon Workshop",
        description: "i18n.collectors.the_gnomon_workshop.description",
        version: "0",
        website: "https://www.thegnomonworkshop.com/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167026.jpg",
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
        entryUrl: "https://www.thegnomonworkshop.com/settings",
    }

    constructor() {
        super(TheGnomonWorkshopCollector.CONFIG);
    }
}
