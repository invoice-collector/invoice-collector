
import { SketchCollector } from '../../sketchCollector';

export class PetershopCollector extends SketchCollector {

    static CONFIG = {
        id: "petershop",
        name: "petershop",
        description: "i18n.collectors.petershop.description",
        version: "0",
        website: "https://www.petershop.de/index.php?cl=tc_b2b_item_list_document",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920083.jpg",
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
        entryUrl: "https://www.petershop.de/index.php?cl=tc_b2b_item_list_document",
    }

    constructor() {
        super(PetershopCollector.CONFIG);
    }
}
