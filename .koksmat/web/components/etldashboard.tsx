/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rVjXpwMROa0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'
import { Archivo } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";

export function ETLDashboard() {
  return (
    <main
      key="1"
      className="grid min-h-screen w-full grid-cols-1 gap-6 bg-gray-100 p-6 dark:bg-gray-950 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">ETL Dashboard</h1>
          <Button size="sm">
            <PlusIcon className="mr-2 h-4 w-4" />
            New ETL Process
          </Button>
        </div>
      </section>
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Data Extraction</h2>
          <Button size="sm">
            <UploadIcon className="mr-2 h-4 w-4" />
            Upload Script
          </Button>
        </div>
        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="extract-script">PowerShell Script</Label>
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2" />
          </div>
          <div className="grid gap-2">
            <Button size="sm">
              <PlayIcon className="mr-2 h-4 w-4" />
              Run Extraction
            </Button>
            <pre className="rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800 syntax-highlight">
              {`
                      [
                        {
                          "id": 1,
                          "name": "John Doe",
                          "email": "john@example.com"
                        },
                        {
                          "id": 2,
                          "name": "Jane Smith",
                          "email": "jane@example.com"
                        }
                      ]
                      `}
            </pre>
          </div>
        </div>
      </section>
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Data Transformation</h2>
          <Button size="sm">
            <CodeIcon className="mr-2 h-4 w-4" />
            Edit Queries
          </Button>
        </div>
        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="transform-query">SQL Query</Label>
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-2" />
          </div>
          <div className="grid gap-2">
            <Button size="sm">
              <PlayIcon className="mr-2 h-4 w-4" />
              Preview Data
            </Button>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Data Loading</h2>
          <Button size="sm">
            <DatabaseIcon className="mr-2 h-4 w-4" />
            Connect Database
          </Button>
        </div>
        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="db-host">Host</Label>
            <Input id="db-host" placeholder="Enter database host" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="db-port">Port</Label>
            <Input id="db-port" placeholder="Enter database port" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="db-name">Database</Label>
            <Input id="db-name" placeholder="Enter database name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="db-user">Username</Label>
            <Input id="db-user" placeholder="Enter database username" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="db-pass">Password</Label>
            <Input
              id="db-pass"
              placeholder="Enter database password"
              type="password"
            />
          </div>
          <Button size="sm">
            <DatabaseIcon className="mr-2 h-4 w-4" />
            Load Data
          </Button>
        </div>
      </section>
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">ETL History</h2>
          <Button size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            View Timeline
          </Button>
        </div>
        <div className="mt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Script Version</TableHead>
                <TableHead>Data Volume</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-05-24 10:30 AM</TableCell>
                <TableCell>v1.2.3</TableCell>
                <TableCell>10,000 rows</TableCell>
                <TableCell>
                  <Badge variant="default">Success</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-05-23 08:15 PM</TableCell>
                <TableCell>v1.2.2</TableCell>
                <TableCell>8,500 rows</TableCell>
                <TableCell>
                  <Badge variant="destructive">Failed</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-05-22 03:45 PM</TableCell>
                <TableCell>v1.2.1</TableCell>
                <TableCell>12,000 rows</TableCell>
                <TableCell>
                  <Badge variant="default">Success</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="col-span-1 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Scheduling</h2>
          <Button size="sm">
            <ClockIcon className="mr-2 h-4 w-4" />
            Run Test
          </Button>
        </div>
        <div className="mt-4 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="schedule-frequency">Frequency</Label>
            <Select>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="schedule-time">Time</Label>
            <Input id="schedule-time" type="time" />
          </div>
          <Button size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule ETL
          </Button>
        </div>
      </section>
    </main>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
