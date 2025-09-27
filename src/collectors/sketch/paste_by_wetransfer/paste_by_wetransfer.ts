
import { SketchCollector } from '../../sketchCollector';

export class PasteByWetransferCollector extends SketchCollector {

    static CONFIG = {
        id: "paste_by_wetransfer",
        name: "Paste by wetransfer",
        description: "i18n.collectors.paste_by_wetransfer.description",
        version: "0",
        website: "https://pasteapp.com/?next=%2Fadmin%2Fteams%2Fbilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/406785.jpg",
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
        entryUrl: "https://pasteapp.com/?next=%2Fadmin%2Fteams%2Fbilling",
    }

    constructor() {
        super(PasteByWetransferCollector.CONFIG);
    }
}
