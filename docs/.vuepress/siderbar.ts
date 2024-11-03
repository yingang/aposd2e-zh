import { SidebarArrayOptions, SidebarItemOptions } from '@vuepress/theme-default'
import fs from 'fs'
import path from 'path'

/**
 * 扫描 docs 目录下的 .md文件，生成侧边栏配置
 *
 * 读取每个 .md 的第一行作为标题
 *
 *
 * @param {string} lang 语言
 * @param {string} docsDir 目录
 */
export function createSiderBar(docsDir: string, linkPrefix: string): SidebarArrayOptions {
	const sidebar: SidebarArrayOptions = []
	const dir = path.resolve(docsDir)
	const files = fs.readdirSync(dir)
	files.forEach((file) => {
		if (file.endsWith('.md')) {
			const filePath = path.join(dir, file)
			const content = fs.readFileSync(filePath, 'utf-8')
			const title = content.split('\n')[0].replace(/^#*/, '')

			let item: SidebarItemOptions
			if (file.endsWith('README.md')) {
				item = {
					text: title,
					link: `${linkPrefix}`,
				}
			} else {
				item = {
					text: title,
					link: `${linkPrefix}/${file.replace(/\.md$/, '.html')}`,
				}
			}

			sidebar.push(item)
		} else {
		}
	})
	return sidebar
}
