
import { SketchCollector } from '../../sketchCollector';

export class VegwareCollector extends SketchCollector {

    static CONFIG = {
        id: "vegware",
        name: "vegware",
        description: "i18n.collectors.vegware.description",
        version: "0",
        website: "https://www.vegware.com/index.php?act=login&redir=aHR0cHM6Ly93d3cudmVnd2FyZS5jb20vaW5kZXgucGhwP2NjVXNlcj0xMjRjZTViNDAzNTkyZWExMDQ2ZGU1ZWRiM2JiM2JhNw==",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/41878.jpg",
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
        entryUrl: "https://www.vegware.com/index.php?act=login&redir=aHR0cHM6Ly93d3cudmVnd2FyZS5jb20vaW5kZXgucGhwP2NjVXNlcj0xMjRjZTViNDAzNTkyZWExMDQ2ZGU1ZWRiM2JiM2JhNw==",
    }

    constructor() {
        super(VegwareCollector.CONFIG);
    }
}
