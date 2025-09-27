
import { SketchCollector } from '../../sketchCollector';

export class GraphicReseauCollector extends SketchCollector {

    static CONFIG = {
        id: "graphic_reseau",
        name: "GRAPHIC RESEAU",
        description: "i18n.collectors.graphic_reseau.description",
        version: "0",
        website: "https://www.graphic-reseau.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/791555.jpg",
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
        entryUrl: "https://www.graphic-reseau.com/",
    }

    constructor() {
        super(GraphicReseauCollector.CONFIG);
    }
}
