
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VwpfsNlCollector extends SketchCollector {

    static CONFIG = {
        id: "vwpfs_nl",
        name: "VWPFS (.nl)",
        description: "i18n.collectors.vwpfs_nl.description",
        version: "0",
        website: "https://e-invoice.vwpfs.nl/vwpfs/welcome.html?9d9sgshrkor2ntdie9fr72eerc=g862dns1ajil4q3mrol6rl99gr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695468.jpg",
        type: CollectorType.SKETCH,
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
        loginUrl: "https://e-invoice.vwpfs.nl/vwpfs/welcome.html?9d9sgshrkor2ntdie9fr72eerc=g862dns1ajil4q3mrol6rl99gr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VwpfsNlCollector.CONFIG);
    }
}
